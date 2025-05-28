// src/components/ErrorBoundary.tsx
import React, { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode; // Optional prop for a custom fallback UI
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error; // Optional: store the error itself if needed for display
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // This lifecycle method is used to update state so the next render will show the fallback UI.
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    console.log("ErrorBoundary: getDerivedStateFromError caught an error:", error);
    return { hasError: true, error: error };
  }

  // This lifecycle method is for logging error information.
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary: Uncaught error:", error, errorInfo);
    // Example: logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div style={{ padding: '20px', border: '1px solid red', backgroundColor: '#ffeeee' }}>
          <h2>Oops! Something went wrong.</h2>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
          {this.state.error && <pre style={{ whiteSpace: 'pre-wrap' }}>{this.state.error.toString()}</pre>}
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;