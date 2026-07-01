import { useCallback, useEffect, useRef, useState } from "react";

const ghostFrameOne = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 0,
  0, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 0,
  1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1,
  1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1,
  1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1,
  0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0,
];

const ghostFrameTwo = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0,
  0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
  0, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 0,
  0, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 0,
  1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1,
  1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1,
  1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
  1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1,
];

type GhostNode = {
  id: string;
  x: number;
  y: number;
  row: number;
  col: number;
};

type PixelGhostProps = {
  id: string;
  bodyColor: string;
  initialNodeIndex?: number;
  startDelayMs?: number;
};

type GhostRegistryState = {
  nodeId: string | null;
  nextNodeId: string | null;
};

const GHOST_SIZE = 22;
const GHOST_SPEED_PIXELS_PER_SECOND = 85;
const ghostRegistry = new Map<string, GhostRegistryState>();

export default function PixelGhost({ id, bodyColor, initialNodeIndex = 0, startDelayMs = 250 }: PixelGhostProps) {
  const ghostRef = useRef<HTMLDivElement>(null);
  const previousNodeIdRef = useRef<string | null>(null);
  const [nodes, setNodes] = useState<GhostNode[]>([]);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [durationMs, setDurationMs] = useState(0);

  const measureNodes = useCallback(() => {
    const shell = ghostRef.current?.parentElement;
    if (!shell) {
      return;
    }

    const cards = Array.from(shell.querySelectorAll("article"));
    if (cards.length === 0) {
      return;
    }

    const cardRects = cards.map((card) => card.getBoundingClientRect());
    const shellRect = shell.getBoundingClientRect();
    const firstTop = cardRects[0].top;
    const firstLeft = cardRects[0].left;
    const firstRow = cardRects.filter((rect) => Math.abs(rect.top - firstTop) < 2);
    const firstColumn = cardRects.filter((rect) => Math.abs(rect.left - firstLeft) < 2);

    if (firstRow.length < 2 || firstColumn.length < 2) {
      return;
    }

    const gapXCenters = firstRow.slice(0, -1).map((rect, index) => {
      const nextRect = firstRow[index + 1];
      return rect.right + (nextRect.left - rect.right) / 2 - shellRect.left;
    });

    const gapYCenters = firstColumn.slice(0, -1).map((rect, index) => {
      const nextRect = firstColumn[index + 1];
      return rect.bottom + (nextRect.top - rect.bottom) / 2 - shellRect.top;
    });

    const nextNodes = gapYCenters.flatMap((y, row) =>
      gapXCenters.map((x, col) => ({
        id: `${row}-${col}`,
        x,
        y,
        row,
        col,
      })),
    );

    setNodes(nextNodes);
    setCurrentNodeId((current) => current ?? nextNodes[initialNodeIndex % nextNodes.length]?.id ?? null);
  }, [initialNodeIndex]);

  const moveToNextNode = useCallback(() => {
    if (nodes.length === 0 || !currentNodeId) {
      return;
    }

    const currentNode = nodes.find((node) => node.id === currentNodeId);
    if (!currentNode) {
      return;
    }

    const neighbors = nodes.filter(
      (node) =>
        (node.row === currentNode.row && Math.abs(node.col - currentNode.col) === 1) ||
        (node.col === currentNode.col && Math.abs(node.row - currentNode.row) === 1),
    );
    const otherGhosts = Array.from(ghostRegistry.entries())
      .filter(([ghostId]) => ghostId !== id)
      .map(([, state]) => state);
    const blockedNodeIds = new Set(otherGhosts.flatMap((state) => [state.nodeId, state.nextNodeId].filter(Boolean)));
    const freeNeighbors = neighbors.filter((node) => !blockedNodeIds.has(node.id));
    const forwardNeighbors = freeNeighbors.filter((node) => node.id !== previousNodeIdRef.current);
    const choices = forwardNeighbors.length > 0 ? forwardNeighbors : freeNeighbors.length > 0 ? freeNeighbors : neighbors;
    const sharedCurrentNode = otherGhosts.some((state) => state.nodeId === currentNode.id);
    const rankedChoices = sharedCurrentNode
      ? [...choices].sort((a, b) => {
          const distanceFromA = Math.min(
            ...otherGhosts.map((state) => {
              const otherNode = nodes.find((node) => node.id === state.nodeId || node.id === state.nextNodeId);
              return otherNode ? Math.hypot(a.x - otherNode.x, a.y - otherNode.y) : Number.POSITIVE_INFINITY;
            }),
          );
          const distanceFromB = Math.min(
            ...otherGhosts.map((state) => {
              const otherNode = nodes.find((node) => node.id === state.nodeId || node.id === state.nextNodeId);
              return otherNode ? Math.hypot(b.x - otherNode.x, b.y - otherNode.y) : Number.POSITIVE_INFINITY;
            }),
          );

          return distanceFromB - distanceFromA;
        })
      : choices;
    const topChoices = sharedCurrentNode ? rankedChoices.slice(0, 2) : rankedChoices;
    const nextNode = topChoices[Math.floor(Math.random() * topChoices.length)];

    if (!nextNode) {
      return;
    }

    const distance = Math.hypot(nextNode.x - currentNode.x, nextNode.y - currentNode.y);
    previousNodeIdRef.current = currentNode.id;
    ghostRegistry.set(id, { nodeId: currentNode.id, nextNodeId: nextNode.id });
    setDurationMs(Math.max(900, Math.round((distance / GHOST_SPEED_PIXELS_PER_SECOND) * 1000)));
    setCurrentNodeId(nextNode.id);
  }, [currentNodeId, id, nodes]);

  useEffect(() => {
    measureNodes();

    const shell = ghostRef.current?.parentElement;
    if (!shell) {
      return;
    }

    const resizeObserver = new ResizeObserver(measureNodes);
    resizeObserver.observe(shell);

    return () => resizeObserver.disconnect();
  }, [measureNodes]);

  useEffect(() => {
    ghostRegistry.set(id, { nodeId: currentNodeId, nextNodeId: ghostRegistry.get(id)?.nextNodeId ?? null });

    return () => {
      ghostRegistry.delete(id);
    };
  }, [currentNodeId, id]);

  useEffect(() => {
    if (nodes.length === 0 || !currentNodeId || durationMs !== 0) {
      return;
    }

    const timeoutId = window.setTimeout(moveToNextNode, startDelayMs);
    return () => window.clearTimeout(timeoutId);
  }, [currentNodeId, durationMs, moveToNextNode, nodes.length, startDelayMs]);

  const currentNode = nodes.find((node) => node.id === currentNodeId);

  return (
    <div
      ref={ghostRef}
      className="skills-ghost"
      style={{
        transform: currentNode
          ? `translate3d(${currentNode.x - GHOST_SIZE / 2}px, ${currentNode.y - GHOST_SIZE / 2}px, 0)`
          : "translate3d(0, 0, 0)",
        transitionDuration: `${durationMs}ms`,
      }}
      onTransitionEnd={moveToNextNode}
      aria-hidden="true"
    >
      <div className="skills-ghost__frame skills-ghost__frame--one">
        {ghostFrameOne.map((pixel, index) => (
          <span
            key={`ghost-one-${index}`}
            className={pixel === 2 ? "bg-white" : pixel === 3 ? "bg-arcade-border" : ""}
            style={pixel === 1 ? { backgroundColor: bodyColor } : undefined}
          />
        ))}
      </div>
      <div className="skills-ghost__frame skills-ghost__frame--two">
        {ghostFrameTwo.map((pixel, index) => (
          <span
            key={`ghost-two-${index}`}
            className={pixel === 2 ? "bg-white" : pixel === 3 ? "bg-arcade-border" : ""}
            style={pixel === 1 ? { backgroundColor: bodyColor } : undefined}
          />
        ))}
      </div>
    </div>
  );
}
