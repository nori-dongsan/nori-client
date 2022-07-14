if (typeof window === 'undefined') {
  const server = import('./server');
  server.then((s) => s.server.listen());
} else {
  const worker = import('./browers');
  worker.then((w) => w.worker.start());
}

export {};
