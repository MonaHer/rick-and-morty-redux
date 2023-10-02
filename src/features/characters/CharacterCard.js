import { useGetAllCharactersQuery } from "./apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  closeModal,
  setSelectedCharacterId,
} from "../modal/modalSlice";
import Modal from "react-modal";
import { addToCart } from "../cart/cartSlice";

export default function CharacterCard({ result }) {
  const { isOpen, selectedCharacterId } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useGetAllCharactersQuery();

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  function handleOpenInfo(result) {
    dispatch(setSelectedCharacterId(result.id));
    dispatch(openModal());
  }

  function handleAddToCart(result) {
    dispatch(addToCart(result));
  }

  const selectedCharacter = data.results.find(
    (result) => result.id === selectedCharacterId
  );

  return (
    <li key={result.id}>
      <h2>{result.name}</h2>
      <button onClick={() => handleOpenInfo(result)}>Show Info</button>
      <button onClick={() => handleAddToCart(result)}>Add to cart</button>
      {isOpen && selectedCharacter && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => dispatch(closeModal())}
          contentLabel="Info Modal"
        >
          <h3>{selectedCharacter.name}</h3>
          <img alt={selectedCharacter.name} src={selectedCharacter.image} />
          <p>Status: {selectedCharacter.status}</p>
          <p>Species: {selectedCharacter.species}</p>

          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Close Info
          </button>
        </Modal>
      )}
    </li>
  );
}
