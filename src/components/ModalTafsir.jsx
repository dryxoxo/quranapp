import React from 'react'

export const ModalTafsir = (props) => {

    const { namaLatin, deskripsi } = props
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <p onClick={() => document.getElementById('my_modal_3').showModal()}>Tentang Surat Ini</p>
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle w-full">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Deskripsi Surat {namaLatin}</h3>
                    <p className="py-4" dangerouslySetInnerHTML={{ __html: deskripsi }}/>
                </div>
            </dialog>
        </>

    )
}
