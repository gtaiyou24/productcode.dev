

export default function DetailCodePage({ params }: { params: { id: string }; }) {
    return (
        <div>詳細ページ: {params.id}</div>
    );
}