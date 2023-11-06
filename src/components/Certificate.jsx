import styles from "../CSS/certificate.module.css"
import bannerElement1 from "../media/CerElement.png"
import sign from "../media/sign.png"

const Certificate =  ()=>{

    
    
    return <div id={styles.certificate}>
        <div>
            <h1>CERTIFICATE</h1>
            <h3>OF ACHIEVEMENT</h3>
            <h4>PROUDLY PRESENT TO</h4>
            <input type="text" />
            <h5>LOREM IPSCUM DOLOR SIT AMET CONSRCTETUR</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo eum repellendus iure quaerat suscipit nostrum nulla architecto quasi ex dicta iusto quisquam, laborum animi ut nemo aliquid perspiciatis aut quod doloribus minima dignissimos? Vitae tenetur, voluptas placeat, tempora, ipsum assumenda fugiat animi neque officia inventore tempore qui qui.</p>
            <div>
                <div>
                    <div>

                    </div>
                    <p>DATE</p>
                </div>
                <img src={bannerElement1} alt="" />
                <div>
                    <div>
                        <img src={sign} alt="" />
                    </div>
                    <p>SIGNATURE</p>
                </div>

            </div>
        </div>
    </div>

}

export default Certificate;