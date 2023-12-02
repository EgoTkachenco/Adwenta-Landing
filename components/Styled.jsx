export const Card = ({ children, className, ...props }) => (
  <div
    className={`flex flex-col p-6 gap-4 text-base text-gray-600 bg-white shadow ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.displayName = 'Card';

Card.Header = ({ children }) => (
  <div className="font-serif text-xl uppercase">{children}</div>
);

Card.Header.displayName = 'Card Header';
