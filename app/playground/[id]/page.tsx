"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { usePlayground } from '@/modules/playground/hooks/usePlayground';

function MainPlaygroundPage() {

        const { id } = useParams<{ id: string }>();

        const { playgroundData, templateData, isLoading, error, saveTemplateData } = usePlayground(id);

        console.log(playgroundData)
        console.log(templateData)

  return (
    <div>
        Params: {id}
    </div>
  )
}

export default MainPlaygroundPage