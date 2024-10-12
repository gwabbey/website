export default function Title({title}: { title: string }) {
    return (
        <h1
            style={{
                fontSize: "3rem",
                margin: 0,
                padding: 0,
                backgroundImage:
                    "linear-gradient(to right, rgb(249, 168, 212), rgb(216, 180, 254), rgb(129, 140, 248))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
            }}
        >
            {title}
        </h1>
    );
}
