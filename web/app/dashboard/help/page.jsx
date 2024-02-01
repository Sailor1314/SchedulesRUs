import React from "react";

const Page = () => {
    const styles = {
        contactBox: {
            marginTop: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        },
        contactItem: {
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            borderRadius: '5px',
        },
        contactHeader: {
            marginTop: '0',
        },
        contactText: {
            marginBottom: '5px',
        },
        link: {
            color: '#0077cc',
            textDecoration: 'none',
        }
    };

    const mailtoLink = (email) => `mailto:${email}?subject=Help Needed&body=Hi, I need some help with...`;

    return (
        <div>
            <h1>Help</h1>
            <div style={styles.contactBox}>
                <h2>Emergency Contact</h2>
                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Paradon Meeanan</h3>
                    <p style={styles.contactText}>
                        Email: <a style={styles.link} href={mailtoLink("paradon.meeanan@edu.sait.ca")}>paradon.meeanan@edu.sait.ca</a>
                    </p>
                    <p style={styles.contactText}>Number: <a style={styles.link} href="tel:+1403-1111-1111">403-1111-1111</a></p>
                </div>
                <div style={styles.contactItem}>
                    <h3 style={styles.contactHeader}>Felix Zhang</h3>
                    <p style={styles.contactText}>
                        Email: <a style={styles.link} href={mailtoLink("yuhao.zhang@edu.sait.ca")}>yuhao.zhang@edu.sait.ca</a>
                    </p>
                    <p style={styles.contactText}>Number: <a style={styles.link} href="tel:+1403-2222-2222">403-2222-2222</a></p>
                </div>
            </div>
        </div>
    )
}

export default Page;
