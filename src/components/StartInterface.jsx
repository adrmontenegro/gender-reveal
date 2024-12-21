export default function StartInterface({onRevealClick}) {
  return <>
    <h1>¿Seré niño o niña?</h1>
    <button onClick={() => onRevealClick()}>¡Averiguemoslo!</button>
  </>
}