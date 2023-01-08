import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>404 Error</h1>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" onClick={() => navigate(-1)}>
                    Back
                </Button>
            </div>
        </div>
    );
};
  
export default NotFound;