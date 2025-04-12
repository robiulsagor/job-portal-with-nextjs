const PageHeader = ({ text }: { text: string }) => {
    return (
        <div className="w-full h-[35vh] bg-black text-white flex items-center justify-center">
            <h1 className="text-4xl font-semibold">{text}</h1>
        </div>
    )
}

export default PageHeader