import { Github, Linkedin, Mail } from 'lucide-react'
import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { FadeIn } from '../../components/ui/FadeIn'
import { Section } from '../../components/ui/Section'
import { PROFILE } from '../../lib/constants'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const INITIAL_FORM_VALUES: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateForm = (values: ContactFormValues): ContactFormErrors => {
  const errors: ContactFormErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter at least 2 characters.'
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please provide a valid email address.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}

export default function ContactSection() {
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM_VALUES)
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const mailtoUrl = useMemo(
    () =>
      `mailto:${PROFILE.email}?subject=${encodeURIComponent(
        "Let's Build Something Great",
      )}&body=${encodeURIComponent('Hi Anthony,\n\nI would like to discuss a project with you.')}`,
    [],
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    const fieldName = name as keyof ContactFormValues

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value,
    }))

    setFormErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[fieldName]
      return nextErrors
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm(formValues)
    setFormErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    setIsSubmitted(true)
    setFormValues(INITIAL_FORM_VALUES)
  }

  return (
    <Section
      description="Let&apos;s Build Something Great. Reach out for collaborations, internships, or product opportunities."
      eyebrow="Contact"
      id="contact"
      title="Start a Conversation"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <FadeIn>
          <Card className="p-6 sm:p-8">
            <form className="grid gap-4" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  aria-describedby={formErrors.name ? 'name-error' : undefined}
                  aria-invalid={Boolean(formErrors.name)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your full name"
                  type="text"
                  value={formValues.name}
                />
                {formErrors.name ? (
                  <p className="mt-1 text-xs text-rose-600 dark:text-rose-400" id="name-error">
                    {formErrors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  aria-describedby={formErrors.email ? 'email-error' : undefined}
                  aria-invalid={Boolean(formErrors.email)}
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  value={formValues.email}
                />
                {formErrors.email ? (
                  <p className="mt-1 text-xs text-rose-600 dark:text-rose-400" id="email-error">
                    {formErrors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  aria-describedby={formErrors.message ? 'message-error' : undefined}
                  aria-invalid={Boolean(formErrors.message)}
                  className="min-h-32 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
                  id="message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell me about your project goals..."
                  value={formValues.message}
                />
                {formErrors.message ? (
                  <p className="mt-1 text-xs text-rose-600 dark:text-rose-400" id="message-error">
                    {formErrors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Button size="md" type="submit" variant="primary">
                  Send Message
                </Button>
                <Button href={mailtoUrl} size="md" variant="outline">
                  <Mail size={16} />
                  Email Directly
                </Button>
              </div>

              {isSubmitted ? (
                <p className="rounded-2xl border border-emerald-300/70 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                  Message validated successfully. Use the Email Directly button to send it instantly.
                </p>
              ) : null}
            </form>
          </Card>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Card className="h-full p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Let&apos;s Build Something Great
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Open to internships, collaborations, and full-stack projects focused on impact.
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-100/70 p-4 dark:border-slate-700 dark:bg-slate-800/70">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Email
              </p>
              <a
                className="mt-2 inline-block text-sm font-medium text-sky-700 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
                href={`mailto:${PROFILE.email}`}
              >
                {PROFILE.email}
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                aria-label="Visit Anthony's GitHub profile"
                className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={PROFILE.github}
                rel="noreferrer"
                target="_blank"
              >
                <Github size={18} />
              </a>
              <a
                aria-label="Visit Anthony's LinkedIn profile"
                className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={PROFILE.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                <Linkedin size={18} />
              </a>
              <a
                aria-label="Email Anthony"
                className="rounded-full border border-slate-300/70 p-2 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                href={`mailto:${PROFILE.email}`}
              >
                <Mail size={18} />
              </a>
            </div>
          </Card>
        </FadeIn>
      </div>
    </Section>
  )
}
