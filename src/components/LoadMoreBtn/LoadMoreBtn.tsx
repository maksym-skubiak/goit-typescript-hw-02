interface Props {
  onClick: () => void;
}
function LoadMoreBtn({ onClick }: Props) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
}
export default LoadMoreBtn;
