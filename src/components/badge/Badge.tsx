import styleBadge from "./Badge.module.css"

export function Badge() {
    return (
        <div>
            <p className={styleBadge.strongGreen}>Parabéns, sua compra possui frete grátis</p>
        </div>
    )
}