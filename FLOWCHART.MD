flowchart TD
Start([User Opens App]) --> CheckLocation{Location<br/>Permission?}

    CheckLocation -->|Granted| FetchWeather[Fetch Weather Data<br/>for Current Location]
    CheckLocation -->|Denied| DefaultLocation[Use Lagos, Nigeria<br/>as Default Location]

    DefaultLocation --> FetchWeather

    FetchWeather --> CheckNetwork{Network<br/>Available?}

    CheckNetwork -->|No| NetworkError[Show Network Error<br/>Message]
    CheckNetwork -->|Yes| LoadingState[Show Loading Spinner]

    NetworkError --> WaitNetwork[Wait for Connection]
    WaitNetwork --> CheckNetwork

    LoadingState --> DisplayWeather[Display Current Weather]

    DisplayWeather --> MainMenu{User Action?}

    MainMenu -->|View Forecast| ForecastPage[Navigate to<br/>Forecast Page]
    MainMenu -->|Search City| SearchCity[Enter City Name]
    MainMenu -->|View Map| MapPage[Navigate to<br/>Map Page]
    MainMenu -->|View Bookmarks| BookmarkPage[Navigate to<br/>Bookmarks Page]
    MainMenu -->|Bookmark Location| AddBookmark[Add to Bookmarks]
    MainMenu -->|Toggle Theme| SwitchTheme[Switch Light/Dark Mode]

    SearchCity --> ValidateCity{City<br/>Found?}
    ValidateCity -->|Yes| FetchWeather
    ValidateCity -->|No| CityNotFound[Show 'City Not Found']
    CityNotFound --> SearchCity

    ForecastPage --> Show5Day[Display 5-Day Forecast<br/>& Hourly Data]
    Show5Day --> MainMenu

    MapPage --> ShowMap[Display Interactive Map<br/>with Weather Locations]
    ShowMap --> MainMenu

    BookmarkPage --> CheckBookmarks{Has<br/>Bookmarks?}
    CheckBookmarks -->|No| EmptyState[Show 'Bookmark Empty']
    CheckBookmarks -->|Yes| ShowBookmarks[Display Bookmark Cards]

    ShowBookmarks --> BookmarkAction{User Action?}
    BookmarkAction -->|Click Bookmark| LoadBookmark[Load Weather for<br/>Selected Location]
    BookmarkAction -->|Remove Bookmark| DeleteBookmark[Remove from List]

    LoadBookmark --> FetchWeather
    DeleteBookmark --> UpdateStorage[Update LocalStorage]
    UpdateStorage --> BookmarkPage

    EmptyState --> MainMenu

    AddBookmark --> SaveToStorage[Save to LocalStorage]
    SaveToStorage --> ShowSuccess[Show Bookmark Icon<br/>as Filled]
    ShowSuccess --> MainMenu

    SwitchTheme --> UpdateTheme[Update Theme in<br/>LocalStorage]
    UpdateTheme --> ApplyTheme[Apply Theme to App]
    ApplyTheme --> MainMenu

    style Start fill:#4ade80,stroke:#22c55e,stroke-width:3px,color:#000
    style DefaultLocation fill:#fbbf24,stroke:#f59e0b,stroke-width:2px,color:#000
    style DisplayWeather fill:#60a5fa,stroke:#3b82f6,stroke-width:2px
    style BookmarkPage fill:#a78bfa,stroke:#8b5cf6,stroke-width:2px
    style ForecastPage fill:#f472b6,stroke:#ec4899,stroke-width:2px
    style MapPage fill:#fb923c,stroke:#f97316,stroke-width:2px
    style NetworkError fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
