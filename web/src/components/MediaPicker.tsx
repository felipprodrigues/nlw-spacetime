'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) return

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
        accept="image/*"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="rounded-large aspect-video w-full object-cover"
        />
      )}
    </>
  )
}
