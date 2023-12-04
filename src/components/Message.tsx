export interface MessageProps {
  name?: string;
}

/**
 *
 * @returns Simple hello world message
 */
export default function Message({ name = "" }: MessageProps) {
  name = name.trim();

  if (name) {
    return <h1>Hello {name}</h1>;
  }

  return <h1>Hello others</h1>;
}
