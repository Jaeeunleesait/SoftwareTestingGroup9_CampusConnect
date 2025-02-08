import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import ActionButton from "@/app/components/Buttons/ActionButton";
import { getTodayDate } from "@/app/_utils/dateUtils";
import { useUserData } from '@/app/_utils/userData-context';

import { toast } from "react-toastify";

//mui
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from '@mui/material';

type CreateArticleProps = { 
    closeOnClick: any,
    articleTypes: string[], 
    action: string,
    articleObject?: any,
    closeArticleEditor: any,
};


const ArticleEditor: React.FC<CreateArticleProps> = ({ closeOnClick, articleTypes, action, articleObject, closeArticleEditor }) => {

    const { userData } = useUserData();
    const [ userFullName, setUserFullName ] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: action === "Create" ? "" : articleObject?.title || "",
            date: action === "Create" ? getTodayDate() : articleObject?.date || "",
            type: action === "Create" ? "" : articleObject?.type || "",
            audience: action === "Create" ? "" : articleObject?.audience || "",
            tags: action === "Create" ? "" : articleObject?.tags || "",
            content: action === "Create" ? "" : articleObject?.content || "",
            author: action === "Create" ? "" : articleObject?.author || userFullName,
        },
    });

    // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         setPreviewUrl(URL.createObjectURL(file));
    //     } else {
    //         setPreviewUrl(null);
    //     }
    // };

   
    const submitForm = async (data: any, type: "publish" | "save-preview") => {

        //set loader to true

        const authorName = data.author.trim() || userFullName;

        const articleData = {
            title: data.title,
            // thumbnail: data.thumbnail,
            date: data?.date || getTodayDate(),
            type: data.type,
            audience: data.audience,
            tags: data.tags,
            content: data.content,
            status: type === "publish" ? "Published" : "Draft",
            author: authorName,
            // images: data.images
        }

        console.log("Entered Article Data: ", articleData);

        if (action === "Create") {
            processCreateArticle(articleData);
        } else {
            console.log("Update article request");
            // processUpdateArticle(articleData);
        }
    }

    async function processCreateArticle(articleData: any) {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(articleData),
            });

            const data = await response.json();
            console.log("response: ", data);

            if (!response.ok) {
                const errorData = data;
                toast.error(errorData.message || "An Error occurred creating article.");
                return;
            }

            toast.success(data.message);
            closeArticleEditor();

        } catch (error) {
            console.log("Error: ", error);  
            closeArticleEditor();
            toast.error(`Unknown error occurred ${action === "Create" ? "creating" : "updating"} article! : ` + error, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
        }
    }


    // const processUpdateArticle = async (articleData: any) => {
    //     try {

    //     } catch (error) {
            
    //     }
    // };


    // if (type === "save-preview") {
    //     router.push(`/articles/preview?data=${encodeURIComponent(JSON.stringify(articleData))}`);
    // }

    useEffect(() => {
        setUserFullName(`${userData?.first_name || ""} ${userData?.last_name || ""}`.trim());
        
    }, []);

    return(
        <main className="">
            <header className="flex justify-between items-center bg-white p-4 rounded-lg mb-6 shadow-md">
                {action === "Create" ? 
                    <h1 className="font-semibold">Create Article</h1> 
                    : <h1 className="font-semibold">Edit Article</h1>
                }
                <Tooltip title="Close Editor" arrow>
                    <button onClick={closeOnClick}>
                        <CloseIcon />
                    </button>
                </Tooltip>
            </header>
            <section className="flex items-center bg-white p-4 rounded-lg mb-6 shadow-md">
                {/* <form onSubmit={handleSubmit(action === "Create" ? handleCreate : handleUpdate) } className="flex flex-row flex-wrap w-full"> */}
                <form onSubmit={handleSubmit((data) => submitForm(data, ))} className="flex flex-row flex-wrap w-full">
                    <div className="grid grid-cols-2 gap-4">

                        {/* title */}
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="title">Title</label>
                            <input className={formStyling.inputStyling} type="text" id="title" 
                                {...register("title", { 
                                    required: 'Title is Required',
                                    maxLength: { value: 100, message: 'Title should not exceed 100 characters' }
                                })}
                            />
                            {errors.title && <p className={formStyling.errorStyle}>{errors.title.message}</p>}    
                        </div>
                    
                        {/* thumbnail upload */}
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="thumbnail">Thumbnail</label>
                            <input className={formStyling.inputStyling} type="file" id="thumbnail" 
                            // {...register("thumbnail", { 
                            //     required: 'Thumbnail is Required',
                            //     validate: {
                            //         isImage: (value: FileList) => {
                            //             const file = value[0];
                            //             if (!file) return false;
                            //             return ["image/jpeg", "image/png", "image/gif"].includes(file.type) || "Only image files (jpeg, png, gif) are allowed";
                            //         },
                            //         isSizeValid: (value: FileList) => {
                            //             const file = value[0];
                            //             if (!file) return "Please select a file";
                            //             return file.size <= 5 * 1024 * 1024 || "File size must not exceed 5MB";              // size in bytes
                            //         }
                            //     },
                            // })}
                            // onChange={handleFileChange}
                            />
                            {/* {errors.thumbnail && <p className={formStyling.errorStyle}>{errors.thumbnail.message}</p>} */}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* date, type */}
                            <div>
                                <label className={formStyling.labelStyling} htmlFor="date">Date Published</label>
                                {/* default to current date */}
                                <input className={formStyling.inputStyling} type="date" id="date"
                                />
                            </div>

                            {/* article type */}
                            <div>
                                <label className={formStyling.labelStyling} htmlFor="Type">Type</label>
                                {/* fetch available article categories from db */}
                                <select className={formStyling.inputStyling} id="Type"
                                    {...register("type", { required: 'Type is Required' })}
                                >
                                    {articleTypes.map((type, index) => (
                                        <option key={index} value={type}>
                                            {type}
                                        </option>
                                    ))}       
                                </select>
                                {errors.type && <p className={formStyling.errorStyle}>{errors.type.message}</p>}
                            </div>
                        </div>

                        {/* author name */}
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="author">Author</label>
                            <input className={formStyling.inputStyling} type="text" id="author" placeholder={userFullName || "Enter Author's Name" }
                                {...register("author")}
                            />
                        </div>

                        {/* audience and tags */}
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="Audience">Audience (*select modal)</label>
                            <input className={formStyling.inputStyling} type="audience" id="audience" 
                                // {...register("audience", { required: 'Audience is Required' })}
                            />
                            {/* {errors.audience && <p className={formStyling.errorStyle}>{errors.audience.message}</p>} */}
                        </div>
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="tags">Tags</label>
                            <input className={formStyling.inputStyling} type="text" id="tags"
                                // {...register("content", { required: 'Tags are Required' })}
                            />
                            {/* {errors.tags && <p className={formStyling.errorStyle}>{errors.tags.message}</p>} */}
                        </div>
                    </div>

                    {/* toggle content editor: simplified and TinyMCE*/}
                    <div>
                        <div>
                            <label className={formStyling.labelStyling} htmlFor="content">Content</label>
                            <textarea className={formStyling.inputStyling} id="content" cols={200} rows={10}
                                {...register("content", { 
                                    required: 'Content is Required',
                                    maxLength: { value: 5000, message: 'Content should not exceed 5000 characters' }
                                })}
                            />
                            {errors.content && <p className={formStyling.errorStyle}>{errors.content.message}</p>}
                            
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full space-x-5">
                        <ActionButton title="Publish" onClick={handleSubmit((data) => submitForm(data, "publish"))}    
                            textColor="text-saitBlue" borderColor="border-saitBlue" hoverBgColor="bg-saitBlue" hoverTextColor="text-saitWhite" />
                        <ActionButton title="Save & Preview" onClick={handleSubmit((data) => submitForm(data, "save-preview"))}
                            textColor="text-saitRed" borderColor="border-saitRed" hoverBgColor="bg-saitRed" hoverTextColor="text-saitWhite"/>
                              
                    </div>
                </form>
            </section>
        </main>
    );
}

export default ArticleEditor;



const formStyling = {
    labelStyling: "text-sm font-light text-saitBlack",
    inputStyling: "font-light w-full p-2 mb-3 border border-gray-300 mt-1 rounded-md focus:outline-none focus:ring-1 focus:ring-saitBlue focus:border-transparent",
    errorStyle: "text-red-500 text-sm",
}