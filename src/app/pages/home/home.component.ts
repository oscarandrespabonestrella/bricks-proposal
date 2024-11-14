import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  gridItems = [
    {
      title: 'Create incoming document',
      description: 'Manage your files',
      icon: 'upload_file',
    },
    {
      title: 'Create outgoing document',
      description: 'Track your projects',
      icon: 'post_add',
    },
    {
      title: 'Open task',
      description: 'lorem ipsum',
      icon: 'outbox',
    },
    {
      title: 'Upcoming task',
      description: 'lorem ipsum',
      icon: 'upcoming',
    },
    {
      title: 'Completed task',
      description: 'lorem ipsum',
      icon: 'fact_check',
    },
    {
      title: 'Received documents',
      description: 'lorem ipsum',
      icon: 'file_open',
    },
    {
      title: 'Create incoming document',
      description: 'Manage your files',
      icon: 'upload_file',
    },
    {
      title: 'Create outgoing document',
      description: 'Track your projects',
      icon: 'post_add',
    },
    { title: 'Reports', description: 'Generate insights', icon: 'assessment' },
    {
      title: 'Settings',
      description: 'Configure your workspace',
      icon: 'settings',
    },
    { title: 'Help', description: 'Get support', icon: 'help' },
  ];

  createButtons = [
    {
      title: 'Incoming document',
      description: 'Manage your files',
      icon: 'upload_file',
    },
    {
      title: 'Outgoing document',
      description: 'Track your projects',
      icon: 'post_add',
    }]

    taskButtons = [
      {
        title: 'Open task',
        description: 'lorem ipsum',
        icon: 'outbox',
      },
      {
        title: 'Upcoming task',
        description: 'lorem ipsum',
        icon: 'upcoming',
      },
      {
        title: 'Completed task',
        description: 'lorem ipsum',
        icon: 'fact_check',
      },]

      documentsButtons = [
        {
          title: 'Received documents',
          description: 'lorem ipsum',
          icon: 'file_open',
        },]
  
}
