import fetch from "node-fetch";
import { performance } from "perf_hooks";

const BASE_URL = "http://localhost:3000/api/videos";

// ---------------- Sequential ----------------
async function spamSequential() {
  console.log("=== Sequential Spam ===");
  const startTotal = performance.now();

  for (let i = 1; i <= 10; i++) {
    const start = performance.now();
    const res = await fetch(BASE_URL);
    const data = await res.json();
    const end = performance.now();

    console.log(`Request ${i} time: ${(end - start).toFixed(2)} ms`, data);
  }

  const endTotal = performance.now();
  console.log(
    "Sequential total time:",
    (endTotal - startTotal).toFixed(2),
    "ms"
  );
}

// ---------------- Concurrent ----------------
async function spamConcurrent() {
  console.log("\n=== Concurrent Spam ===");
  const startTotal = performance.now();

  const taskPromises = [];
  for (let i = 1; i <= 10; i++) {
    taskPromises.push(
      (async () => {
        const start = performance.now();
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const end = performance.now();

        console.log(`Request ${i} time: ${(end - start).toFixed(2)} ms`, data);
        return data;
      })()
    );
  }

  const results = await Promise.all(taskPromises);

  const endTotal = performance.now();
  console.log(
    "Concurrent total time:",
    (endTotal - startTotal).toFixed(2),
    "ms"
  );
}

// ---------------- Run Test ----------------
async function runTest() {
  //   await spamSequential();
  await spamConcurrent();
}

runTest();
