class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<div class="top-bar">
        <div class="container">
			<p class=elerhetosegek>OM kód: <!-- -->030180<!-- --> | <!-- -->2400 Dunaújváros, Dózsa György út 15/A
			</p>
            <div class="social">
				<a class="top-gomb" aria-label="Facebook oldal megnyitása" href="https://www.facebook.com/szigdujv" rel="noopener noreferrer" title="Facebook" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" focusable="false" class="chakra-icon css-1j8cdq4" aria-hidden="true">
						<g fill="" fill-rule="evenodd">
							<g fill="" fill-rule="nonzero">
								<g>
									<g>
										<g>
											<path d="M17.5 4.167v11.666c0 .92-.746 1.667-1.667 1.667h-3.125c-.23 0-.416-.187-.416-.417v-5h1.95c.198 0 .368-.139.408-.333l.3-1.5c.012-.06-.003-.124-.041-.172-.04-.048-.097-.077-.159-.078h-2.458V7.292c0-.115.093-.209.208-.209h2.083c.23 0 .417-.186.417-.416v-1.25c0-.23-.187-.417-.417-.417H12.5C11.12 5 10 6.12 10 7.5V10H8.975c-.23 0-.417.187-.417.417v1.25c0 .23.187.416.417.416H10v5c0 .23-.187.417-.417.417H4.167c-.92 0-1.667-.746-1.667-1.667V4.167c0-.92.746-1.667 1.667-1.667h11.666c.92 0 1.667.746 1.667 1.667z" transform="translate(-1132 -15) translate(962 9) translate(164) translate(6 6)">
											</path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</a>
				<a class="top-gomb" aria-label="TikTok profil megnyitása" href="https://www.tiktok.com/@szig_tiktok" title="TikTok" target="_blank" rel="noopener noreferrer">
					<svg width="20px" height="20px" viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
						<path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z">
						</path>
					</svg>
				</a>
				<a class="top-gomb" aria-label="E-mail küldés" href="mailto:sziszki@sziszki.hu" title="E-mail" rel="noopener noreferrer" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1gm3tio" aria-hidden="true">
						<g fill="" fill-rule="evenodd"><g fill="currentColor">
							<g>
								<g>
									<g>
										<g>
											<path d="M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 7l-6.35 4.45c-.991.693-2.309.693-3.3 0L4 11V8.9l7.35 5.15c.39.271.91.271 1.3 0L20 8.9V11z" transform="translate(-888 -4352) translate(0 1479) translate(149 2610) translate(714) translate(25 263)">
											</path>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
					</svg>
				</a>
			</div>
        </div>
    </div>
	
	<div class="logo">
                <img class="logo-img" src="/szig/res/SzIG_cimer.png" alt="Dunaújvárosi Széchenyi István Gimnázium címere">
                <div class="logo-text">
                    <h1>Dunaújvárosi Széchenyi István Gimnázium</h1>
                </div>
            </div>
	
	<nav class="main-nav">
        <div class="container">
            <ul class="nav-links">
                <li><a href="#" class="nav-b">Főoldal</a></li>
                <li><a href="#" class="nav-b">Az iskoláról</a></li>
                <li><a href="#" class="nav-b">Képzéseink</a></li>
                <li><a href="#" class="nav-b">Hírek</a></li>
                <li><a href="#" class="nav-b">Galéria</a></li>
                <li><a href="#" class="nav-b">Kapcsolat</a></li>
				<a class="G-class" href="https://accounts.google.com/v3/signin/identifier?hd=szig.mdn.hu&flowName=GlifWebSignIn" rel="noopener noreferrer" target="_blank">
					<span class="LMS-logo"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" focusable="false" class="chakra-icon css-tr59jl" aria-hidden="true"><g fill="" fill-rule="evenodd"><g><g><g><g><path d="M18.375 10.316c0 3.631-1.934 8.059-7.761 8.059-4.38.03-7.955-3.495-7.989-7.875.034-4.38 3.609-7.904 7.989-7.875 1.812.007 3.568.623 4.987 1.75.098.08.159.197.166.324.001.128-.05.25-.14.341-.57.52-1.112 1.07-1.627 1.645-.15.165-.4.188-.578.053-.808-.599-1.794-.907-2.8-.876-2.585 0-4.68 2.096-4.68 4.682 0 2.585 2.095 4.681 4.68 4.681 2.626 0 3.737-1.12 4.314-3.106h-3.998c-.242 0-.438-.196-.438-.438V9.363c0-.242.196-.438.438-.438h7c.201-.001.37.15.393.35.033.346.047.694.044 1.041z" transform="translate(-920 -245) translate(222 235) translate(688) translate(10 10)"></path></g></g></g></g></g></svg>
					</span>CLASSROOM
				</a>
				<a class="nav-kreta" href="https://klik030180001.e-kreta.hu" rel="noopener noreferrer" target="_blank">
					<span class="LMS-logo"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" focusable="false" class="chakra-icon css-v5w1at" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g fill="#FFF"><g><g><g><path d="M0 0L5.233 0 5.233 6.603 10.979 0 18.624 0 9.682 10.13 19.364 20.261 10.979 20.261 5.233 13.67 5.233 20.261 0 20.261z" transform="translate(-1071 -245) translate(222 235) translate(839) translate(10 10)"></path><path d="M12.976 10.081L21.268 1.479 21.268 18z" transform="translate(-1071 -245) translate(222 235) translate(839) translate(10 10)"></path></g></g></g></g></g></svg>
					</span>KRÉTA
				</a>
			</ul>
        </div>
    </nav>
		`
	}
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
		<footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <h4>Dunaújvárosi Széchenyi István Gimnázium</h4>
                    <p>2400 Dunaújváros, Dózsa György út 15/A</p>
                    <p>OM azonosító: 030180</p>
                    <p>Dunaújvárosi Tankerületi Központ</p>
                </div>
                <div class="footer-col">
                    <h4>Hasznos linkek</h4>
                    <p><a href="#">Adatkezelési tájékoztató</a></p>
                    <p><a href="#">Felvételi információk</a></p>
                    <p><a href="#">...</a></p>
                </div>
            </div>
            <div class="copyright">
                &copy; Dunaújvárosi Széchenyi István Gimnázium
            </div>
        </div>
    </footer>
		`
	}
}

customElements.define('my-footer', MyFooter)
