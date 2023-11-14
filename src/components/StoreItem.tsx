import { Card } from "react-bootstrap"

type StoreItemProps = {
    name: string
    id: number
    price: string
    imageUrl: string
}

export function StoreItem({ name, id, price, imageUrl }: StoreItemProps) {
    return (
    <Card>
        <Card.Img variant="top" src={imageUrl} height="200px" />
    </Card>)
}

