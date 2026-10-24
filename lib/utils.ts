export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function safeHttpUrl(value: string | undefined) {
  if (!value) return "";
  try {
    const url = new URL(value.trim());
    if (url.protocol === "https:" || url.protocol === "http:") {
      return url.toString();
    }
  } catch {
    return "";
  }
  return "";
}

export function safeEmail(value: string | undefined) {
  if (!value) return "";
  const email = value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "";
  return email;
}

export function safePhone(value: string | undefined) {
  if (!value) return "";
  const phone = value.trim();
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return "";
  return phone;
}

export function whatsappHref(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) return "";
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
