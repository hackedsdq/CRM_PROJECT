import React,{useState,useEffect,useRef} from 'react'

import { InertiaLink, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function AddModalProduits(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        prenom: "",
        role: "",
        email: "",
        password:"",
        photo:"https://res.cloudinary.com/dbttd3n1v/image/upload/v1671478713/snernvqpxpnxpjt3owmn.jpg",
    });

    const cloudinaryRef = useRef();
    const widgetRef = useRef();



        // uploading the image
        cloudinaryRef.current =  window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
          cloudName: 'dbttd3n1v', 
          uploadPreset: 'j5xeceeh'
        }
          , (error, result) => { 
            if (!error && result && result.event === "success") { 
                let photo = result.info.thumbnail_url
            setData(data.photo = photo) 
            console.log(result.info)
            }
          }
        )

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post("/adcom/users",{
            preserveState:true,
            onSuccess:page=>{
                Inertia.reload({only:['users']})
                $('#scrollable-modal').hide();
                $('.modal-backdrop').remove(); 
                document.body.style.overflow = 'scroll'
            },});
    };

    const handleChange = (e) => {
        let inputType = e.target.name;
        let inputValue = e.target.value;

        if (inputType === "name") 
        setData((data.name = inputValue));
        else if (inputType === "prenom")
        setData((data.prenom = inputValue));
        else if (inputType === "role") 
        setData((data.role = inputValue));
        else if (inputType === "email")
        setData((data.email = inputValue));
        else if (inputType === "password")
        setData((data.password = inputValue));
    };


    return (
    <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal fade" id="scrollable-modal" tabIndex={-1} role="dialog" aria-labelledby="scrollableModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="scrollableModalTitle">Ajouter un utilisateur</h5>
                    <button  type="button" className="btn-close" data-bs-dismiss="modal" aria-hidden="true" />
                </div>
                        <div className="modal-body">
                            {/* bodyyyyy of the modal */}

                            <div className="mb-3">
                                <label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                >
                                    Nom
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.name}
                                    name="name"
                                    type="text"
                                    className="form-control"
                                />
                                {errors.name && (
                                    <h6 style={{ color: "red" }}>
                                        {errors.name}
                                    </h6>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="example-textarea"
                                    className="form-label"
                                >
                                    Prenom
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.prenom}
                                    name="prenom"
                                    type="text"
                                    className="form-control"
                                />
                                {errors.prenom && (
                                    <h6 style={{ color: "red" }}>
                                        {errors.prenom}
                                    </h6>
                                )}
                            </div>
                            <div class="col-xl-6">
                                <div class="mb-3 mt-3 mt-xl-0">
                                    <label for="projectname" class="mb-0">
                                        Photo
                                    </label>
                                    <p class="text-muted font-14">
                                    Taille de vignette recommandée 800x400 (px).
                                    </p>

                                    <div
                                     style={{textAlign:"center"}}
                                        class="dropzone"
                                        data-plugin="dropzone"
                                        data-previews-container="#file-previews"
                                        data-upload-preview-template="#uploadPreviewTemplate"
                                    >


                                        <div onClick={()=> widgetRef.current.open()} class="dz-message needsclick">
                                            <i class="h3 text-muted dripicons-cloud-upload"></i>
                                            <h4>
                                                Déposez les fichiers ici ou cliquez pour
                                                télécharger.
                                            </h4>
                                        </div>
                                        <img style={{height:50,width:50}} src={data.photo} alt='' />

                                    </div>

                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.email}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <h6 style={{ color: "red" }}>
                                        {errors.email}
                                    </h6>
                                )}
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                >
                                    Mot de passe
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.password}
                                    name="password"
                                    type="password"
                                    className="form-control"
                                />
                                {errors.password && (
                                    <h6 style={{ color: "red" }}>
                                        {errors?.password}
                                    </h6>
                                )}
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="simpleinput"
                                    className="form-label"
                                >
                                    role
                                </label>
                                <input
                                    onChange={(e) => handleChange(e)}
                                    value={data.role}
                                    name="role"
                                    type="text"
                                    className="form-control"
                                />
                                {errors.role && (
                                    <h6 style={{ color: "red" }}>
                                        {errors?.role}
                                    </h6>
                                )}
                            </div>
                            {/* end of the modal body */}
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                          <button type="submit" className="btn btn-primary">
                                Ajouter utilisateur
                            </button>
                         
                        </div>
                    </div>
                    {/* /.modal-content */}
                </div>
                {/* /.modal-dialog */}
            </div>
        </form>
    );
}
