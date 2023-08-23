
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb-footer session-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <h4>For business</h4>
                        <a href="employer"></a>
                        <p>Employer</p>
                        <a href="healthplan"></a>
                        <p>Health Plan</p>

                        <a href="individual"></a>
                        <p>Indivdual</p>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Resources</h4>
                        <a href="/resources">
                            <p>Resources center</p>
                        </a>
                        <a href="resources">
                            <p>Testimonials</p>
                        </a>
                        <a href="resources">
                            <p>STV</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Partners</h4>
                        <a href="employer">
                            <p>Swing Tech</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Partner</h4>
                     
                            <p>Swing Tech</p>
                            <p>tech on</p>
                             <p>guide</p>
                             <p>pk owner</p>
                  
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Company</h4>
                      
                            <p>About</p>
                      
                      
                            <p>Press</p>
                       
                       
                            <p>career</p>
                    
                       
                            <p>Contact</p>
                       
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Comming soon on</h4>

                      
                            <p>Update</p>
                        
                      
                            <p>Update</p>
                        
                        
                            <p>Update</p>
                        
                     
                            <p>Update</p>
                    
                    </div>
                    <hr />
                    <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        </div>
                      
                       
                    </div>
                    <div className="sb-footer-below-links">
                        <a href="/terms"><div><p>terms</p></div></a>
                        <a href="/privacy"><div><p>privacy</p></div></a>
                        <a href="/Security"><div><p>Security</p></div></a>
                        <a href="/Cookies"><div><p>Cookies Declaration</p></div></a>
                        <p>
                            @{new Date().getFullYear()}
                        </p>
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Footer