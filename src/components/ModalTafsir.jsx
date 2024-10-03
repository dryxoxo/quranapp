import React from 'react'

export const ModalTafsir = (props) => {

    const { namaLatin, deskripsi, title, id } = props
    return (
        <>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <p onClick={() => document.getElementById(`${id}`).showModal()}>{title}</p>
            <dialog id={id} className="modal modal-bottom sm:modal-middle w-full">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{title}{namaLatin}</h3>
                    <p className="py-4" dangerouslySetInnerHTML={{ __html: deskripsi }} />
                </div>
            </dialog>
        </>

    )
}
