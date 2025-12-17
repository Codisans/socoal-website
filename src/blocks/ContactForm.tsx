'use client'

import { Button } from '@/components/button'
import emailjs from '@emailjs/browser'
import clsx from 'clsx'
import React, { useId, useRef, useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'form'>) {
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const serviceId = 'service_3sbzhxq'
    const templateId = 'template_wqfbufw'
    const publicKey = 'xyWeNYY19Zp1T84Qz'

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setIsSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
          setErrors({})
        },
        (error) => {
          console.error('Error sending message:', error)
        },
      )
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const handleInputChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }))
      }
    }

  if (isSubmitted) {
    return (
      <div className={clsx(className, 'py-8 text-center')}>
        <div className="mb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
            <svg
              className="h-8 w-8 text-zinc-600 dark:text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-zinc-950 dark:text-white">
            ¡Mensaje enviado!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Gracias por contactarnos. Te responderemos lo antes posible.
          </p>
        </div>
        <Button type="button" onClick={() => setIsSubmitted(false)}>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form
      {...props}
      className={clsx(className)}
      onSubmit={handleSubmit}
      ref={form}
    >
      <div className="isolate -space-y-px rounded-2xl bg-white/50">
        <TextInput
          label="Nombre completo"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange('name')}
          invalid={!!errors.name}
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange('email')}
          invalid={!!errors.email}
        />
        <TextInput
          label="Asunto"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleInputChange('subject')}
          invalid={!!errors.subject}
        />
        <TextArea
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleInputChange('message')}
          rows={5}
          invalid={!!errors.message}
        />
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setFormData({ name: '', email: '', subject: '', message: '' })
            setErrors({})
          }}
        >
          Limpiar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          <span className="w-28">
            {' '}
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </span>
        </Button>
      </div>
    </form>
  )
}

function TextInput({
  label,
  invalid,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & {
  label: string
  invalid?: boolean
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className={clsx(
          'peer block w-full border bg-transparent px-6 pt-12 pb-4 text-base/6 ring-2 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-hidden',
          invalid
            ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
            : 'focus:ring-theme/80 border-zinc-200 text-zinc-950',
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold',
          invalid
            ? 'text-red-500 peer-not-placeholder-shown:text-red-900 peer-focus:text-red-900'
            : 'text-zinc-500 peer-not-placeholder-shown:text-zinc-950 peer-focus:text-zinc-950',
        )}
      >
        {label}
      </label>
    </div>
  )
}

function TextArea({
  label,
  invalid,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & {
  label: string
  invalid?: boolean
}) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={id}
        {...props}
        placeholder=" "
        className={clsx(
          'peer block min-h-40 w-full border bg-transparent px-6 pt-12 pb-4 text-base/6 ring-2 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:outline-hidden',
          invalid
            ? 'border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500'
            : 'focus:ring-theme/80 border-zinc-200 text-zinc-950',
        )}
      />
      <label
        htmlFor={id}
        className={clsx(
          'pointer-events-none absolute top-10 left-6 -mt-3 origin-left text-base/6 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold',
          invalid
            ? 'text-red-500 peer-not-placeholder-shown:text-red-900 peer-focus:text-red-900'
            : 'text-zinc-500 peer-not-placeholder-shown:text-zinc-950 peer-focus:text-zinc-950',
        )}
      >
        {label}
      </label>
    </div>
  )
}
