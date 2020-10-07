import { Inject } from "@nestjs/common";
import { getToken } from "./metrics";

/**
 * @public
 */
export function InjectMetric(
  name: string,
): (
  target: Record<string, unknown>,
  key: string | symbol,
  index?: number | undefined,
) => void {
  const token = getToken(name);

  return Inject(token);
}
