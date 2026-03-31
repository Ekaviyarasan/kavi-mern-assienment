import { useState, useMemo } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";

export default function App() {
  // 🧩 Task 1 — Heavy Sum
  const [num, setNum] = useState(5);

  const heavySum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      // simulate heavy work
      for (let j = 0; j < 100000; j++) {}
      sum += i;
    }
    return sum;
  };

  const sumResult = useMemo(() => heavySum(num), [num]);

  // 🧩 Task 2 — Large Array
  const generateArray = () => {
    return Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    );
  };

  const [arr, setArr] = useState(generateArray());

  const evenSum = useMemo(() => {
    const evens = arr.filter((n) => n % 2 === 0);
    return evens.reduce((acc, val) => acc + val, 0);
  }, [arr]);

  // 🧩 Task 3 — Prime Checker
  const [primeInput, setPrimeInput] = useState(7);
  const [isPrime, setIsPrime] = useState(null);

  const checkPrime = () => {
    let n = Number(primeInput);

    if (n <= 1) {
      setIsPrime(false);
      return;
    }

    for (let i = 2; i < n; i++) {
      // simulate heavy work
      for (let j = 0; j < 50000; j++) {}
      if (n % i === 0) {
        setIsPrime(false);
        return;
      }
    }

    setIsPrime(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Task 1 */}
      <Card>
        <CardContent>
          <h2>Task 1: Heavy Sum</h2>
          <Input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
          <p>Sum: {sumResult}</p>
        </CardContent>
      </Card>

      {/* Task 2 */}
      <Card>
        <CardContent>
          <h2>Task 2: Large Array</h2>
          <Button onClick={() => setArr(generateArray())}>
            Regenerate Array
          </Button>
          <p>Even Sum: {evenSum}</p>
        </CardContent>
      </Card>

      {/* Task 3 */}
      <Card>
        <CardContent>
          <h2>Task 3: Prime Checker</h2>
          <Input
            type="number"
            value={primeInput}
            onChange={(e) => setPrimeInput(e.target.value)}
          />
          <br />
          <Button onClick={checkPrime}>Check Prime</Button>

          {isPrime !== null && (
            <p>
              {primeInput} is {isPrime ? "Prime" : "Not Prime"}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}