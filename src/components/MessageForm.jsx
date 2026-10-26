import { useState } from "react";
import './MessageForm.css';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvkkkbaq';

function MessageForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        const form = event.currentTarget;
        setIsSubmitting(true);
        setStatus('');
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json',
                },
            });
            
            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }
    
    return (
        <section className="message-section" id="message">
            <div className="message-container">
                <div className="message-heading">
                    <h2>Send Me a Message</h2>
                    <p>
                        Have a question, an opportunity, or just want to connect?
                        Send me a message.
                    </p>
                </div>
                
                <form className="message-form" onSubmit={handleSubmit}>
                    <div className="message-field">
                        <label htmlFor="message-name">Full Name</label>
                        <input id="message-name" name="name" type="text" placeholder="Your name" autoComplete="name" required maxLength={100} />
                    </div>
                    
                    <div className="message-field">
                        <label htmlFor="message-email">Email Address</label>
                        <input id="message-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required maxLength={254} />
                    </div>
                    
                    <div className="message-field">
                        <label htmlFor="message-subject">Subject</label>
                        <input id="message-subject" name="subject" type="text" placeholder="What would you like to discuss?" maxLength={150} />
                    </div>
                    
                    <div className="message-field">
                        <label htmlFor="message-content">Message</label>
                        <textarea id="message-content" name="message" placeholder="Write your message here..." rows={0} required maxLength={5000} />
                    </div>
                    
                    <button
                        className="message-submit"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <span aria-hidden="true">{"\u2192"}</span>}
                    </button>
                    
                    {status === 'success' && (
                        <p className="message-status success" role="status">
                            Your message has been sent successfully. Thank you!
                        </p>
                    )}
                    
                    {status === 'error' && (
                        <p className="message-status error" role="alert">
                            Something went wrong. Please try again later.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default MessageForm;