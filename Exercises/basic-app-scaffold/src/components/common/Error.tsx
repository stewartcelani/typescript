type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  return (
    <div style={{ color: 'red' }}>
      <h3>{message}</h3>
    </div>
  );
}
