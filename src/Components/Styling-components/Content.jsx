import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ContentComp extends React.Component{

    render(){
        return(
            <div className="container text-center" id="bio">
                <h3 className="fw-bold fs-2">My Bio</h3>
                <p className="fs-6 fst-italic fw-light">Perkenalkan nama saya Muhammad Yogi, Saya tinggal di Pekanbaru RIAU, saat ini saya bekerja sambil bootcamp di Eduwork. dulu saya sempat kuliah sampai smt 3 di salah satu univ. di riau jurusan Teknik Informatika. sampai sekarang jatuhnya masih cuti, tapi tidak ada saya urus, karna tidak ada biaya.
                    sekarang saya berumur 24 tahun, saya berharap bisa cepat menyelesaikan bootcamp dan mendapatkan pekerjaan yang saya impikan selama ini, Aamiin.. 
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur corrupti sit odit ratione explicabo recusandae voluptatum possimus, atque quaerat eaque quis eius repellat laboriosam sed similique veniam. Natus, pariatur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in quo iusto sequi ex, earum natus fuga laudantium alias enim eligendi et at nobis non, quos, omnis distinctio error laborum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi labore omnis cumque. Itaque ullam nulla sunt quod omnis quas quam magnam iusto voluptatum, quos amet ipsa debitis voluptas rem.</p>
             </div>
        )
    }
}