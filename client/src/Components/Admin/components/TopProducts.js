import React from 'react'
import styles from '../dashboard.module.css'
function TopProducts() {
    return (
        <div className={styles["product-highlight-container"]}>
            <p className={styles["performance-overview-text-style"]}>Top products</p>
            <table className={styles["product-card-list"]}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles["product-card"]}>
                        <td>Sneakers</td>
                        <td>7441.05</td>
                    </tr>
                    <tr className={styles["product-info-container2"]}>
                        <td>Dresses</td>
                        <td>687.14</td>
                    </tr>
                    <tr className={styles["flexbox-container-with-gap"]}>
                        <td>Shirts</td>
                        <td>486.46</td>
                    </tr>
                    <tr className={styles["flex-column-with-gap"]}>
                        <td>Jeans</td>
                        <td>324.10</td>
                    </tr>
                    <tr className={styles["product-info-row"]}>
                        <td>Hats</td>
                        <td>169.27</td>
                    </tr>
                    <tr className={styles["product-info-container"]}>
                        <td>Accessories</td>
                        <td>135.46</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TopProducts