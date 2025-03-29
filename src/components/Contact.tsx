/**
 * Contact Form Component
 * 
 * A Matrix-themed contact form dialog that allows visitors to send messages
 * directly through their default email client. Features a clean, cyberpunk-inspired
 * design consistent with the portfolio's theme.
 * 
 * Key Features:
 * - Name, email, and message fields
 * - Form validation
 * - Auto-generated email using mailto protocol
 * - Matrix-style visual effects
 * - Form state persistence handling
 * - Responsive design
 */

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

/**
 * Props for the Contact component
 * @property {boolean} open - Controls the visibility of the dialog
 * @property {function} onClose - Callback function to close the dialog
 */
interface ContactProps {
  open: boolean;
  onClose: () => void;
}

export const Contact: React.FC<ContactProps> = ({ open, onClose }) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  /**
   * Resets the form to its initial state
   * Called after successful submission or when closing the dialog
   */
  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  /**
   * Handles form submission
   * Creates a mailto link with the form data and opens the user's email client
   * @param {React.FormEvent} e - The form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:olaoluhimself@yahoo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    resetForm();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        resetForm();
        onClose();
      }}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'rgba(0, 17, 0, 0.95)',
          border: '1px solid #0f0',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 0 20px rgba(0,255,0,0.2)',
        },
      }}
    >
      <DialogTitle sx={{ color: '#0f0', fontFamily: 'monospace' }}>
        Contact Me
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#0f0',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            mt: 1,
          }}
        >
          <TextField
            label="Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#0f0',
                '& fieldset': {
                  borderColor: '#0f0',
                },
                '&:hover fieldset': {
                  borderColor: '#0f0',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0f0',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#0f0',
                '&.Mui-focused': {
                  color: '#0f0',
                },
              },
            }}
          />
          <TextField
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#0f0',
                '& fieldset': {
                  borderColor: '#0f0',
                },
                '&:hover fieldset': {
                  borderColor: '#0f0',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0f0',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#0f0',
                '&.Mui-focused': {
                  color: '#0f0',
                },
              },
            }}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                color: '#0f0',
                '& fieldset': {
                  borderColor: '#0f0',
                },
                '&:hover fieldset': {
                  borderColor: '#0f0',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0f0',
                },
              },
              '& .MuiInputLabel-root': {
                color: '#0f0',
                '&.Mui-focused': {
                  color: '#0f0',
                },
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          sx={{
            color: '#0f0',
            borderColor: '#0f0',
            '&:hover': {
              borderColor: '#0f0',
              backgroundColor: 'rgba(0,255,0,0.1)',
            },
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'rgba(0,255,0,0.2)',
            color: '#0f0',
            '&:hover': {
              backgroundColor: 'rgba(0,255,0,0.3)',
            },
          }}
          variant="contained"
        >
          Send Message
        </Button>
      </DialogActions>
    </Dialog>
  );
};
