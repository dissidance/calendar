
type Event = {
  id?: string
  title: string
  description?: string
  start: Date | string | null
  end: Date | string | null
  address: string
  site?: string
}

export type { Event };