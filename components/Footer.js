// components/Footer.js


export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-20">
            <div data-aos="fade-up" className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div >
                    <h2 className="text-blue-400 font-bold text-lg flex items-center gap-2"> Cradle Wing
                    </h2>
                    <p className="mt-2 text-sm">
                        We are a startup supporting expecting mothers through all pregnancy stages.
                    </p>
                    <p className="mt-2 text-sm">Copyright Satyam Studio</p>
                </div>

                {/* Middle Section */}
                <div >
                    <h3 className="text-blue-400 font-bold text-lg">Get in Touch</h3>
                    <p className="mt-2 text-sm">📍 Vit Vellore,Katpadi,India</p>
                    <p className="mt-2 text-sm">📧 Pavanpnaik321@gmail.com</p>
                    <p className="mt-2 text-sm">📞 +91 9113909285</p>
                </div>

                {/* Right Section */}
                <div>
                    <div className="flex gap-4">
                        <span className="bg-white p-2 rounded-full">
                            <img src="/images/social_media_icons/insta.png" alt="Instagram" className="w-6 h-6" />
                        </span>
                        <span className="bg-white  p-2 rounded-full">
                            <img src="/images/social_media_icons/fb.png" alt="facebook" className="w-6 h-6" />
                        </span>
                        <span className="bg-white  p-2 rounded-full">
                            <img src="/images/social_media_icons/whatsapp.png" alt="Whatsapp" className="w-6 h-6" />
                        </span>
                    </div>
                    <p className="mt-2 text-sm">
                    Stay connected with us for the latest updates.
                    </p>
                </div>
            </div>
        </footer>
    );
}
