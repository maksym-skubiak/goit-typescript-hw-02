interface Props {
  message: string;
}
function ErrorMessage({ message }: Props) {
  return <p>{message}</p>;
}
export default ErrorMessage;
