import { Component } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  messages: { text: string, sender: string }[] = [];
  userMessage = '';

  constructor(private questionService: QuestionService) {}

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({ text: this.userMessage, sender: 'user' });

    this.questionService.askQuestion(this.userMessage).subscribe(response => {
      this.messages.push({ text: response.answer, sender: 'bot' });
    });

    this.userMessage = '';
  }
}
