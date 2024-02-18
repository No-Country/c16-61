"use client"
import ItemDetail from '../../../components/ItemDetail/ItemDetail'

export default function DetailedComponent({ params }: { params: { id: string } }) {
  return (
    <>
        <ItemDetail/>
    </>
  );
}
