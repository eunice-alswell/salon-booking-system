# Salon Booking System

A full-featured appointment booking and management system designed for salons, barbershops, and beauty centers. This application streamlines the booking process for both customers and salon staff.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## About

The Salon Booking System is a web-based application that allows customers to easily book appointments at salons, while providing salon owners and staff with efficient tools to manage schedules, services, and customer information. Built as part of my web development journey, this project demonstrates full-stack application development skills.

## Features

### For Customers
- View available appointment slots in real-time
- Browse salon services and pricing
- Select preferred stylists/staff members
- Book, reschedule, or cancel appointments
- Receive booking confirmation notifications
- Get appointment reminders

### For Salon Administrators
- Manage appointment calendar
- Staff schedule management
- Service and pricing management
- View booking statistics and reports
- Approve or modify bookings
- Manage staff profiles and availability

### General Features
- User authentication and authorization
- Responsive design for mobile and desktop
- Real-time availability checking
- Email/SMS notifications (if configured)
- Dashboard with analytics
- Clean and intuitive user interface

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **JavaScript (ES6+)** - Programming language

### Additional Technologies (as applicable)
- **Database** - MongoDB/MySQL/PostgreSQL
- **Authentication** - JWT/Passport.js
- **Email Service** - Nodemailer
- **Template Engine** - EJS/Handlebars

## Project Structure

```
salon-booking-system/
├── src/                    # Source code
│   ├── controllers/        # Request handlers
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── config/            # Configuration files
│   ├── utils/             # Utility functions
│   └── views/             # Template files (if applicable)
├── public/                # Static assets (CSS, JS, images)
├── index.js               # Application entry point
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Database system (MongoDB/MySQL/PostgreSQL)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eunice-alswell/salon-booking-system.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd salon-booking-system
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   NODE_ENV=development
   DATABASE_URL=your_database_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@example.com
   EMAIL_PASSWORD=your_email_password
   ```

5. **Initialize the database:**
   ```bash
   npm run migrate
   # or
   npm run seed
   ```

### Running the Application

**Development mode:**
```bash
npm start
```

**With auto-restart (nodemon):**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🔌 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |
| GET | `/api/auth/profile` | Get user profile |

### Appointments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/appointments` | Get all appointments |
| GET | `/api/appointments/:id` | Get appointment by ID |
| POST | `/api/appointments` | Create new appointment |
| PUT | `/api/appointments/:id` | Update appointment |
| DELETE | `/api/appointments/:id` | Cancel appointment |
| GET | `/api/appointments/available` | Get available time slots |

### Services
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all services |
| GET | `/api/services/:id` | Get service by ID |
| POST | `/api/services` | Create new service (Admin) |
| PUT | `/api/services/:id` | Update service (Admin) |
| DELETE | `/api/services/:id` | Delete service (Admin) |

### Staff
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/staff` | Get all staff members |
| GET | `/api/staff/:id` | Get staff member by ID |
| GET | `/api/staff/:id/availability` | Get staff availability |
| POST | `/api/staff` | Add staff member (Admin) |
| PUT | `/api/staff/:id` | Update staff member (Admin) |

## 📝 Usage Examples

### Book an Appointment

```javascript
// POST /api/appointments
{
  "customerId": "user123",
  "serviceId": "service456",
  "staffId": "staff789",
  "date": "2024-03-25",
  "time": "14:00",
  "notes": "First visit"
}
```

### Check Available Slots

```javascript
// GET /api/appointments/available?date=2024-03-25&serviceId=service456

// Response:
{
  "success": true,
  "availableSlots": [
    "09:00", "10:00", "11:00", "14:00", "15:00"
  ]
}
```

## 🎨 User Interface

The system includes:

- **Customer Dashboard**: View upcoming appointments, book new services
- **Admin Dashboard**: Manage bookings, staff, and services
- **Calendar View**: Visual representation of bookings
- **Service Catalog**: Browse available services with descriptions and pricing
- **Staff Directory**: View available stylists and their specialties

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected admin routes
- Input validation and sanitization
- SQL injection prevention
- XSS protection

## 🧪 Testing

Run tests with:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 📊 Database Schema

### Users Table
- id, name, email, password, role (customer/admin/staff), phone, created_at

### Appointments Table
- id, customer_id, service_id, staff_id, date, time, status, notes, created_at

### Services Table
- id, name, description, duration, price, category, created_at

### Staff Table
- id, user_id, specialty, bio, image_url, available_hours, created_at

## 🎓 What I Learned

This project helped me understand:

- Building appointment booking logic
- Managing time slots and availability
- User authentication and authorization
- Role-based access control (RBAC)
- Database design for booking systems
- Real-time data validation
- Creating admin dashboards
- Email notification systems
- REST API development
- Full-stack application architecture

## 🔮 Future Enhancements

- [ ] Online payment integration (Stripe/PayPal)
- [ ] SMS notifications via Twilio
- [ ] Google Calendar integration
- [ ] Customer loyalty program
- [ ] Reviews and ratings system
- [ ] Multi-location support
- [ ] Advanced analytics and reporting
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Automated appointment reminders
- [ ] Waitlist management
- [ ] Gift card system
- [ ] Social media integration

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Eunice Alswell**

- GitHub: [@eunice-alswell](https://github.com/eunice-alswell)

## Acknowledgments

- Built as part of my full-stack development learning journey
- Inspired by modern salon management systems
- Thanks to the Node.js and Express.js communities

## 📞 Support

For issues or questions:
- Open an issue in the GitHub repository
- Contact the maintainer through GitHub

---

💡 **Note:** This project represents a significant milestone in my development journey, demonstrating the ability to build a complete booking management system with real-world applications.

If you found this project helpful or interesting, please consider giving it a star!
