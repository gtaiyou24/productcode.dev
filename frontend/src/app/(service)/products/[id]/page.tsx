

export default function ProductDetailPage({ params }: { params: { id: string; } }) {
    return (
        <div>{params.id}</div>
    );
}