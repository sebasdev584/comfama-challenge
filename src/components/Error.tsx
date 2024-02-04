export default function Error({ message }: { message: string }) {
  return <div className="bg-red-500 p-2 mt-2 rounded-md">{message}</div>;
}
