import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="550" y="222" rx="3" ry="3" width="52" height="6" />
        <circle cx="105" cy="105" r="105" />
        <rect x="0" y="231" rx="4" ry="4" width="227" height="24" />
        <rect x="0" y="282" rx="4" ry="4" width="232" height="88" />
        <rect x="114" y="395" rx="14" ry="14" width="121" height="45" />
        <rect x="0" y="398" rx="4" ry="4" width="97" height="36" />
    </ContentLoader>
)

export default Skeleton