/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Stripe Payment Link — Mail Box Installation Coastal Series */
  readonly VITE_STORE_CHECKOUT_MAILBOX_INSTALLATION_COASTAL?: string
  /** Stripe Payment Link — Pool Rail Installation Nautical Series */
  readonly VITE_STORE_CHECKOUT_POOL_RAIL_INSTALLATION_NAUTICAL?: string
  /** Stripe Payment Link — Powder Coat */
  readonly VITE_STORE_CHECKOUT_POWDER_COAT?: string
  /** Stripe Payment Link — Dolphin Pool Rail */
  readonly VITE_STORE_CHECKOUT_DOLPHIN_POOL_RAIL?: string
  /** Stripe Payment Link — Nautilus Pool Rail */
  readonly VITE_STORE_CHECKOUT_NAUTILUS_POOL_RAIL?: string
  /** Stripe Payment Link — Dolphin Mail Box Stand */
  readonly VITE_STORE_CHECKOUT_DOLPHIN_MAILBOX_STAND?: string
  /** Stripe Payment Link — Burrowing Owl Mailbox Stand */
  readonly VITE_STORE_CHECKOUT_BURROWING_OWL_MAILBOX_STAND?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
