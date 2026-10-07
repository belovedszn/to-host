import { ArrowDown } from "lucide-react";
import Reveal from "./reveal";

const flow = ["Tournament concludes", "Results finalized", "Prize allocation", "Winner settlement"];

export default function Payments() {
  return (
    <section className="sec">
      <div className="wrap">
        <Reveal><h2 className="h2">Entry fees and prizes, handled in one flow.</h2></Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="card h-full">
              <p className="text-2xl tabular-nums">32 players</p>
              <p className="my-2 text-smoke" aria-label="times">×</p>
              <p className="text-2xl tabular-nums">₦5,000</p>
              <p className="my-2 text-smoke" aria-label="equals">=</p>
              <p className="font-display text-4xl tabular-nums">₦160,000</p>
              <p className="mt-1 text-sm text-smoke">competition pool</p>
            </div>
          </Reveal>
          <Reveal className="h-full">
            <ol className="card h-full">
              {flow.map((f, i) => (
                <li key={f}>
                  <p className="font-medium text-lg">{f}</p>
                  {i < flow.length - 1 && <ArrowDown size={18} strokeWidth={1.5} className="my-2 text-smoke" aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
        <Reveal>
          <p className="lead mt-10">Players pay through the platform. Tournament funds remain associated with the competition while matches are being completed. Once the result is finalized according to the tournament rules, the prize allocation can be settled.</p>
          <p className="mt-4 text-sm text-smoke">Paid competitions and prize payouts will be subject to applicable laws, regulations and payment-provider requirements.</p>
        </Reveal>
      </div>
    </section>
  );
}
