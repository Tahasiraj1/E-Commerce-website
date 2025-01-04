import { useState, useCallback } from 'react'

export const useSheet = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])

  return {
    isOpen,
    onOpen,
    onClose,
  }
}