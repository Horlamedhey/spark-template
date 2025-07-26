# Project Management Dashboard

A comprehensive French project management dashboard featuring financial metrics, project timelines, status tracking, and visual data representations for construction/engineering projects.

**Experience Qualities**:
1. Professional - Clean, corporate interface suitable for business stakeholders
2. Data-focused - Information-dense layout prioritizing metrics and insights
3. Intuitive - Familiar dashboard patterns with clear visual hierarchy

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple interconnected dashboard components displaying various project metrics and timelines

## Essential Features

### Financial Overview Circular Chart
- **Functionality**: Displays total project value (617M) with breakdown by category (BOAD, Autres financ., Partenaires)
- **Purpose**: Quick visual summary of project financing structure
- **Trigger**: Loads automatically on dashboard mount
- **Progression**: Data loads → Chart renders with color-coded segments → Tooltips show on hover
- **Success criteria**: Chart displays correct values with proper color coding and responsive design

### Status Cards Grid
- **Functionality**: Shows key project metrics (Status 30%, Alertes 15, Processus en cours 2)
- **Purpose**: At-a-glance project health indicators
- **Trigger**: Loads with dashboard
- **Progression**: Cards populate → Display metrics with appropriate icons → Update colors based on status
- **Success criteria**: Cards show correct values with proper styling and responsive layout

### Project Details Panel
- **Functionality**: Displays project information (amount, dates, progress bar)
- **Purpose**: Detailed view of current project status and timeline
- **Trigger**: Loads automatically
- **Progression**: Panel loads → Shows project details → Progress bar animates to current percentage
- **Success criteria**: All project details display correctly with proper formatting

### Progress Bars (Passation des marchés)
- **Functionality**: Shows procurement progress for different contract types
- **Purpose**: Visual representation of procurement milestones
- **Trigger**: Loads with dashboard
- **Progression**: Bars render → Animate to current values → Show percentage labels
- **Success criteria**: Bars display correct percentages with proper color coding

### Project Timeline (Chronologie du Projet)
- **Functionality**: Vertical timeline showing project milestones with status indicators
- **Purpose**: Track project progression through various phases
- **Trigger**: Loads automatically
- **Progression**: Timeline renders → Shows milestones in chronological order → Status indicators update
- **Success criteria**: Timeline displays all milestones with correct dates and status colors

### Disbursement Chart (Chronogramme de décaissement)
- **Functionality**: Line and bar chart showing planned vs actual disbursements over time
- **Purpose**: Track financial performance against projections
- **Trigger**: Loads with dashboard
- **Progression**: Chart loads → Plots data points → Shows interactive tooltips on hover
- **Success criteria**: Chart displays both planned and actual data with proper scaling and legends

## Edge Case Handling
- **No Data**: Display skeleton loaders while data is loading
- **API Errors**: Show error states with retry options
- **Mobile View**: Stack components vertically with simplified layouts
- **Data Updates**: Smooth transitions when data refreshes
- **Long Text**: Truncate with tooltips for overflow content

## Design Direction
The interface should feel professional and corporate, similar to enterprise project management tools like Microsoft Project or Primavera. Clean, data-dense layout with subtle shadows and borders to separate content areas.

## Color Selection
Custom palette - Using a professional blue and neutral scheme with accent colors for data visualization.

- **Primary Color**: Professional Blue (oklch(0.5 0.15 240)) - communicates trust and stability
- **Secondary Colors**: Light grays and whites for backgrounds, creating clean separation
- **Accent Color**: Warm Orange (oklch(0.7 0.15 50)) - for highlighting important metrics and CTAs
- **Foreground/Background Pairings**: 
  - Background (White oklch(1 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 16:1 ✓
  - Card (Light Gray oklch(0.98 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 15:1 ✓
  - Primary (Professional Blue oklch(0.5 0.15 240)): White text (oklch(1 0 0)) - Ratio 8:1 ✓
  - Accent (Warm Orange oklch(0.7 0.15 50)): White text (oklch(1 0 0)) - Ratio 4.8:1 ✓

## Font Selection
Inter font family for its excellent readability in data-dense interfaces and professional appearance suitable for business applications.

- **Typographic Hierarchy**: 
  - H1 (Dashboard Title): Inter Bold/24px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/18px/normal letter spacing  
  - H3 (Card Titles): Inter Medium/16px/normal letter spacing
  - Body (Metrics/Data): Inter Regular/14px/normal letter spacing
  - Caption (Labels/Dates): Inter Regular/12px/wide letter spacing

## Animations
Subtle, professional animations that enhance data comprehension without being distracting, focusing on smooth transitions and progressive data loading.

- **Purposeful Meaning**: Gentle animations communicate data loading and updates, reinforcing the professional, reliable nature of the tool
- **Hierarchy of Movement**: Chart animations and progress bars receive priority, with subtle hover states on interactive elements

## Component Selection
- **Components**: Cards for metric display, Progress bars for status tracking, custom Chart components using recharts library, Timeline component for project phases
- **Customizations**: Custom circular chart for financial overview, custom timeline component for project phases
- **States**: Hover states for interactive elements, loading states for data components, active states for filter buttons
- **Icon Selection**: Phosphor icons for consistent, professional iconography throughout the interface
- **Spacing**: Consistent 16px/24px padding using Tailwind's spacing scale for clean, organized layout
- **Mobile**: Single column layout on mobile with collapsible sections, maintaining data hierarchy while optimizing for smaller screens