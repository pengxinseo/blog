import React from 'react';
import Post from "@/components/MdxPost"

export default function ceshi({ params: { locale = '',slug='' }}){

    return (
        <Post locale={locale} slug={slug}/>
    )
}