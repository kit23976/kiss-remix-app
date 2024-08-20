// app/routes/view/$id.tsx

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'; // Assuming you're using react-query
import { json, LoaderFunction } from 'remix';
import { cards } from '~/data'; // Adjust the import path as needed

// Define a function to fetch card data by ID
async function fetchCard(id: number) {
  const card = cards.find(card => card.id === id);
  if (!card) {
    throw new Error('Card not found');
  }
  return card;
}

// Loader function to fetch data on the server side
export let loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params.id || '0');
  const card = await fetchCard(id);
  return json(card);
};

export default function ViewCard() {
  const { id } = useParams();
  const { data: card, error, isLoading } = useQuery(['card', id], () => fetchCard(parseInt(id || '0')));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-4">
      {card ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Card Details</h1>
          <div className="mb-2">
            <img src={card.bgProd} alt={card.name} className="w-32 h-32 object-cover" />
          </div>
          <div className="mb-2">
            <strong>ID:</strong> {card.id}
          </div>
          <div className="mb-2">
            <strong>Name:</strong> {card.name}
          </div>
          <div className="mb-2">
            <strong>Bio:</strong> {card.bio}
          </div>
          <div className="mb-2">
            <strong>Created At:</strong> {card.createdAt}
          </div>
          <div className="mb-2">
            <strong>Status:</strong> {card.active ? 'Active' : 'Inactive'}
          </div>
        </div>
      ) : (
        <div>No card found with this ID.</div>
      )}
    </div>
  );
}
